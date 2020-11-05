import { FormControl, ValidationErrors } from '@angular/forms';
export class Validacionespropias {

    static multiplo2(control: FormControl): ValidationErrors {
        let nro = parseInt(control.value);
        if (nro % 2 == 0)
            return null;
        else
            return { multiplo2: true }
    }

    static menor10(control: FormControl): ValidationErrors {
        let nro = parseInt(control.value);
        if (nro <  10)
            return null;
        else
            return { menor10: true }
    }

    static mayor0_y_menor1000(control: FormControl): ValidationErrors {
        let nro = parseInt(control.value);
        if (nro >0 && nro <1000 )
            return null;
        else
            return { mayor0_y_menor1000: true }
    }

    static numeropositivo(control: FormControl): ValidationErrors {
        let nro = parseInt(control.value);
        if (nro >=0  )
            return null;
        else
            return { numeropositivo: true }
    }

    

}
