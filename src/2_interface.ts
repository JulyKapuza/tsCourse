interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: "1234",
  size: {
    width: 20,
    height: 50,
  },
  color: "#ffffff",
};

const rect2: Rect = {
  id: "14",
  size: {
    width: 20,
    height: 50,
  },
};
rect2.color = "black";

const rect3 = {} as Rect;

//---------------------------------//

interface ReactWithArea extends Rect {
  getArea: () => number;
}

const rect5: ReactWithArea = {
  id: "1235",
  size: {
    width: 45,
    height: 15,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};
console.log(rect5.getArea());

//================================//

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

//================================//

interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: "1px solid black",
  marginTop: "2px",
  borderRadius: "5px",
};
