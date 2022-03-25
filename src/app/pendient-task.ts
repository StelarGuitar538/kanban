export class pendientTask {
  name: string
  finished: boolean
  constructor(name: string, finished?: boolean) {
    this.finished = finished ? finished : false
    this.name = name
  }
}
