import { Scenario } from '../models/Scenario'

export class SearchService {
  async searchByIcao(icao: string): Promise<Scenario[]> {
    return [
      {
        icao: icao.toUpperCase(),
        title: `Sample scenery for ${icao.toUpperCase()}`,
        developer: { name: 'Sample Developer' },
        downloads: [
          {
            type: 'direct',
            label: 'Direct download',
            url: 'https://example.com/file.zip'
          },
          {
            type: 'torrent',
            label: 'Torrent',
            url: 'magnet:?xt=urn:btih:example'
          }
        ]
      }
    ]
  }
}
