import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Producto } from "./Producto";
import { IsNotEmpty } from "class-validator";

@Entity()
export class Proveedor {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "INDIQUE EL CODIGO DE EL PROVEEDOR" })
  Codigo_proveedor: number;

  @Column()
  @IsNotEmpty({ message: "INSERTE EL NOMBRE DEL PROVEEDOR" })
  Nombres_proveedor: string;

  @Column()
  @IsNotEmpty({ message: "INSERTE EL PRIMER APELLIDO" })
  Apellidos_proveedor: string;

  @Column()
  @IsNotEmpty({ message: "INDIQUE LA DIRECCION DEL PROVEEDOR" })
  Direccion_proveedor: string;

  @Column()
  @IsNotEmpty({ message: "INDIQUE LA PROVINCIA DEL PROVEEDOR" })
  Provincia_proveedor: string;

  @Column()
  @IsNotEmpty({ message: "INSERTE EL TELEFONO DEL PROVEEDOR" })
  Telefono_proveedor: number;

  @OneToMany(() => Producto, (producto) => producto.proveedor)
  productos: Producto[];
}
