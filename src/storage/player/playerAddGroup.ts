import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";
import { AppError } from "@utils/AppError";

export async function playerAddGroup(newPlayer: PlayerStorageDTO, group: string) {
  try {
    const storedPlayers = await playersGetByGroup(group)
    
    const playerAlreadyExist = storedPlayers.filter(player => player.name === newPlayer.name)

    if (playerAlreadyExist.length > 0) {
      throw new AppError('Essa pessoa já está adicionada em um time aqui.')
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)

  } catch (error) {
    throw (error)
  }
}