abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract createSepia(): void;
  getReelTime(): number {
    // come task
    return 8;
  }
}

class FaceBook extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
  createSepia(): void {
    console.log("Sepia");
  }
}

const jiwan = new FaceBook("jiwan", "Jiwan", 6);

// we cannot create object directly from abstract class and but we can inherit it from the extended class
