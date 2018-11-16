export class DataDriver {
  public static LoadValue(Name: string) {
    const brute = localStorage.getItem(Name).split(':');
    const type = brute[0];

    //  Dependiendo del tipo de dato guardado lo cargamos
    if (type === 'string') {
        return brute[1];
    }
    if (type === 'number') {
        return Number(brute[1]);
    }
    if (type === 'boolean') {
        return brute[1] === 'true' || brute[1] === 't' || brute[1] === '1';
    }
    if (type === 'json') {
        return JSON.parse(brute[1]);
    }
  }

  public static SaveValue(Name: string, Value: any, Type: string = '') {
    if (Type !== '') {

      if (Type === 'json') {
        Value = JSON.stringify(Value);
      } else if (Type === 'datetime') {
        Type = 'number';
      }

    } else {
      Type = typeof Value;
    }

    localStorage.setItem(Name, Type + ':' + Value);
  }
}
