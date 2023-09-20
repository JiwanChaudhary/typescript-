interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

// here, we can add more properties than in our interface but what properties are in our interface must be included
class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public shorts: string
  ) {}

  createStory(): void {
      console.log("Story");
      
  }
}
