
function apiVersion(version: string) { //class decorators
    return (target: any) => {
      Object.assign(target.prototype, { __version: version, __name: "cami" });
    };
  }

function minLength(length: number) { // attribute decorator
    return (target: any, key: string) => {
      let _value = target[key];
  
      const getter = () => "[play]" + _value;
      const setter = (value: string) => {
        if (value.length < length) {
          throw new Error(`Tamanho menor que ${length}`);
        } else {
          _value = value;
        }
      };
  
      Object.defineProperty(target, key, {
        get: getter,
        set: setter,
      });
    };
  }

class Api {
    @minLength(10)
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  }

  const api = new Api("OiOiOiOiOi");
  console.log(api.name);

