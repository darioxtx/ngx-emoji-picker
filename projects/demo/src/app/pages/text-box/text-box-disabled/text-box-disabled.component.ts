
import { Component, signal } from '@angular/core';
import { TextBoxComponent } from '@chit-chat/ngx-emoji-picker/lib/components/text-box';

@Component({
    selector: 'ch-text-box-disabled',
    imports: [TextBoxComponent],
    templateUrl: './text-box-disabled.component.html',
    styleUrl: './text-box-disabled.component.scss'
})
export class TextBoxDisabledComponent {
    value = signal<string>('Disabled text');
}
