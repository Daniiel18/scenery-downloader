export type DownloadType = 'direct' | 'torrent' | 'external'

export interface DownloadOption {
  type: DownloadType
  label: string
  url: string
}
