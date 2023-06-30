import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Proveedor } from "./Proveedor";
import { Detalle_Factura } from "./Detalle_Factura";
import { IsNotEmpty } from "class-validator";

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "INSERTE EL CODIGO" })
  Codigo_producto: number;

  @Column()
  @IsNotEmpty({ message: "INSERTE LA DESCRIPCION" })
  Descripcion_producto: string;

  @Column()
  @IsNotEmpty({ message: "INSERTE EL PRECIO" })
  Precio_producto: number;

  @Column()
  @IsNotEmpty({ message: "INDIQUE EL STOCK MAXIMO" })
  Stock_maximo_producto: number;

  @Column()
  @IsNotEmpty({ message: "INDIQUE EL STOCK MINIMO" })
  Stock_minimo_producto: number;

  @ManyToOne(() => Proveedor)
  @JoinColumn({ name: "Codigo_proveedor" })
  @IsNotEmpty({ message: "INDIQUE EL CODIGO DE EL PROVEEDOR" })
  proveedor: Proveedor;

  @OneToMany(() => Detalle_Factura, (detalle) => detalle.producto)
  detallesFactura: Detalle_Factura[];
}
