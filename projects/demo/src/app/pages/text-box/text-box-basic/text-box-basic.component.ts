
import { Component, signal } from '@angular/core';
import { TextBoxComponent } from '@chit-chat/ngx-emoji-picker/lib/components/text-box';

@Component({
    selector: 'ch-text-box-basic',
    imports: [TextBoxComponent],
    templateUrl: './text-box-basic.component.html',
    styleUrl: './text-box-basic.component.scss'
})
export class TextBoxBasicComponent {
    value = signal<string>('');
}
