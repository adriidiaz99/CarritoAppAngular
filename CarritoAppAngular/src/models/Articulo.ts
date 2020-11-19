export class Articulo{

    id:number;
    nombre:string;
    imagen: string;
    descripcion:string;
    color: string;
    talla:string;
    cantidad:number;
    rebaja:boolean;
    precioOriginal:number;
    precioRebaja:number;
    importe:number;

    constructor(id:number, nombre:string, imagen:string, descripcion:string, rebaja:boolean, precioOriginal:number, precioRebaja:number, color:string, talla:string, cantidad:number){
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.color = color;
        this.talla = talla;
        this.cantidad = cantidad;
        this.rebaja = rebaja;
        this.precioOriginal = precioOriginal;
        this.precioRebaja = precioRebaja;
        if(rebaja)
            this.importe = Number.parseFloat((precioRebaja * cantidad).toFixed(2));
        else
            this.importe = Number.parseFloat((precioOriginal * cantidad).toFixed(2));
    }

    incrementarCantidad(){
        this.cantidad++;
    }

    decrementarCantidad(){
        this.cantidad--;
    }

    calcularImporte(){

        if(this.rebaja){
            this.importe = Number.parseFloat((this.precioRebaja * this.cantidad).toFixed(2));

        } else {
            this.importe = Number.parseFloat((this.precioOriginal * this.cantidad).toFixed(2));
        }

    }
}