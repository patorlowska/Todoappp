import {
    Component,
    ViewEncapsulation,
    ChangeDetectionStrategy
} from '@angular/core';

@Component({
    selector: 'app-home-page',
    templateUrl: './home.page.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {

    onChangeClicked(): void {
        let buttonOfChange = document.getElementById('buttonOfChange');
        if (buttonOfChange != null) {
            buttonOfChange.style.display = 'block';
        }

        let change = document.getElementById('changeToForm');
        if (change != null) {
            change.style.display = 'none';
        }

        // let buttonOfReturn = document.getElementById('buttonOfReturn ');
        // if (buttonOfReturn != null) {
        //     buttonOfReturn.style.display = 'block';

        // }

    }
}
