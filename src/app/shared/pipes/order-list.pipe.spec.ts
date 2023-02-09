import { OrderListPipe } from './order-list.pipe';
import * as dataRaw from '../../data/data.json';
import { TrackModel } from 'src/app/core/Models/track.model';

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });

  it('Probando entrada y salida de valores', ()=>{

    //Arrager o arranque
    const pipe = new OrderListPipe();
    const { data }: any = (dataRaw as any).default;

    //actuar o accion

    const result: TrackModel[] = pipe.transform(data, '')

    // assert o resultado esperado
    expect(result).toEqual(data);
  });

  it('Probar si se ordena de manera correcta ASC', ()=>{
    const pipe = new OrderListPipe();
    const { data }: any = (dataRaw as any).default;
    const firtValue = data.find((i:any)=> i._id === 7);
    const lastValue = data.find((i:any)=> i._id === 6);

    const result: TrackModel[] = pipe.transform(data, 'name', 'asc');
    const firtResult = result[0];
    const lastResult = result[result.length - 1];

    expect(firtResult).toEqual(firtValue);
    expect(lastResult).toEqual(lastValue);

  });

});
