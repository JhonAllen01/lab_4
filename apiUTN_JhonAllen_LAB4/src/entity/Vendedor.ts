import { IsNotEmpty } from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Cabecera_Factura } from "./Cabecera_Factura";

@Entity()
export class Vendedor {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "INSERTE EL CODIGO DEL VENDEDOR" })
  Codigo_Vendedor: number;

  @Column()
  @IsNotEmpty({ message: "INSERTEN EL NOMBRE DEL VENDEDOR" })
  Nombres_vendedor: string;

  @Column()
  @IsNotEmpty({ message: "INSERTE LOS APELLIDOS DEL VENDEDOR" })
  Apellidos_vendedor: string;

  @Column()
  @IsNotEmpty({ message: "INSERTE LA DIRECCION" })
  Direccion_vendedor: string;

  @Column()
  @IsNotEmpty({ message: "INSERTE NUMERO TELEFONICO" })
  Telefono_vendedor: number;

  @Column()
  @IsNotEmpty({ message: "Falta el celular del vendedor" })
  Celular_vendedor: number;

  @OneToMany(() => Cabecera_Factura, (cabecera) => cabecera.vendedor)
  vendedores: Vendedor[];
}
