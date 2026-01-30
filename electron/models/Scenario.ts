import { Developer } from './Developer'
import { DownloadOption } from './DownloadOption'

export interface Scenario {
  icao: string
  title: string
  developer: Developer
  downloads: DownloadOption[]
}
