import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Vendedor } from "./Vendedor";
import { IsNotEmpty } from "class-validator";
import { Cabecera_Factura } from "./Cabecera_Factura";

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "INSERTE NUMERO" })
  Ruc_cliente: number;

  @Column()
  @IsNotEmpty({ message: "INSERTE NOMBRE" })
  Nombres_cliente: string;

  @Column()
  @IsNotEmpty({ message: "INSERTE APELLIDOS" })
  Apellidos_cliente: string;

  @Column()
  @IsNotEmpty({ message: "INSERTE DIRECCION" })
  Direccion_cliente: string;

  @Column()
  @IsNotEmpty({ message: "INSERTE UN NUMERO" })
  Telefono_cliente: number;

  @OneToMany(() => Cabecera_Factura, (cabecera) => cabecera.cliente)
  clientes: Cliente[];
}
