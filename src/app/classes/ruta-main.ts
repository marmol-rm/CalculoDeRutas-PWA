import {Ubicacion} from "./ubicacion";
import {Usuario} from "./usuario";

export class RutaMain {
  rutId: number;
  rutCoordenadasPartida: string;
  rutCoordenadasDestino: string;
  rutHoraInicio: string;
  rutHoraFin: string;
  rutGuardada: boolean;
  rutFecha: string;
  rutDistancia: number;
  rutTipo: string;
  rutUbiPartida: Ubicacion;
  rutUbiDestino: Ubicacion;
  rutUsuId: Usuario;
}
