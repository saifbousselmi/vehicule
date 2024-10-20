// Définition de l'interface Véhicule
export interface Véhicule {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  // Implémentation de la classe Voiture
  export class Voiture implements Véhicule {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start(): void {
      console.log("Car engine started");
    }
  }
  
  // Création d'une instance de Voiture
  const maVoiture = new Voiture("Toyota", "Corolla", 2021);
  
  // Appel de la méthode start
  maVoiture.start();
  