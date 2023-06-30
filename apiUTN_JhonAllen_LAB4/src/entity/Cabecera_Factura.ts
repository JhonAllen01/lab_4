import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Cliente } from "./Cliente";
import { Vendedor } from "./Vendedor";
import { Detalle_Factura } from "./Detalle_Factura";
import { IsNotEmpty } from "class-validator";

@Entity()
export class Cabecera_Factura {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "INSERTE NUMERO" })
  Numero: number;

  @Column()
  @IsNotEmpty({ message: "INSERTE FECHA" })
  Fecha: Date;

  @ManyToOne(() => Cliente, { cascade: true })
  @JoinColumn({ name: "Ruc_cliente" })
  @IsNotEmpty({ message: "INSERTE ID" })
  cliente: Cliente;

  @ManyToOne(() => Vendedor, { cascade: true })
  @JoinColumn({ name: "Codigo_vendedor" })
  @IsNotEmpty({ message: "INSERTE EL CODIGO DEL VENDEDOR" })
  vendedor: Vendedor;

  @OneToMany(() => Detalle_Factura, (detalle) => detalle.cabeceraFactura, {
    cascade: true,
  })
  detallesFactura: Detalle_Factura[];

  @Column({ default: true })
  @IsNotEmpty({ message: "INSERTE EL ESTADO" })
  Estado: Boolean;
}
