import { Component, Input } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from "../../../data/dataFake"

@Component({
    selector: 'app-content',
    standalone: true,
    templateUrl: './content.component.html',
    styleUrl: './content.component.scss',
    imports: [MenuBarComponent, MenuTitleComponent, RouterLink]
})
export class ContentComponent {

    @Input()
    contentPhoto: string = "";
    @Input()
    contentTitle: string = "Programando em Python";
    @Input()
    contentDescription: string = "O Python é considerada a linguagem de programação mais simples. Para quem está começando a explorar esse universo, então, pode apostar nessa linguagem bastante comum no mundo do trabalho.";
    private id: string | null = "0"

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => 
            this.id = params.get('id')
        )

        if(this.id) this.setValuesToComponent(this.id)
    }

    setValuesToComponent(id: string) {
        const result = dataFake.filter(item => item.id.toString() == id)[0]

            this.contentPhoto = result.photo
            this.contentTitle = result.title
            this.contentDescription = result.description      
    }
}