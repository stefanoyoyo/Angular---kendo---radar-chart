import { Component } from '@angular/core';
import { AxisLabelContentArgs } from '@progress/kendo-angular-charts';

@Component({
    selector: 'my-app',
    template: `
      <kendo-chart [title]="{ text: 'Market Value of Major Banks /bln/' }">

      <kendo-chart-value-axis>
        <kendo-chart-value-axis-item [labels]="{ format: 'C0', content: textContent }">
        </kendo-chart-value-axis-item>
      </kendo-chart-value-axis>
        <kendo-chart-series>
          <kendo-chart-series-item 
            type="radarLine"
            [color]="'blue'"
            name="Market value as of 2007"
            [data]="banksData" 
            field="pre" 
            categoryField="name">
          </kendo-chart-series-item>
        </kendo-chart-series>
        <kendo-chart-legend position="bottom"></kendo-chart-legend>
      </kendo-chart>
    `
  })
  export class AppComponent {
    public banksData = [
      { name: 'JP Morgan', pre: 116, post: 64 },
      { name: 'HSBC', pre: 165, post: 85 },
      { name: 'Credit Suisse', pre: 215, post: 97 },
      { name: 'Goldman Sachs', pre: 75, post: 27 },
      { name: 'Morgan Stanley', pre: 100, post: 16 },
      { name: 'Societe Generale', pre: 49, post: 26 },
      { name: 'UBS', pre: 80, post: 35 },
      { name: 'BNP Paribas', pre: 116, post: 32 },
      { name: 'Unicredit', pre: 108, post: 26 },
      { name: 'Credit Agricole', pre: 90, post: 17 },
      { name: 'Deutsche Bank', pre: 67, post: 10 },
      { name: 'Barclays', pre: 76, post: 7 },
      { name: 'Citigroup',  pre: 91, post: 19 },
      { name: 'RBS', pre: 255, post: 5 }
    ];
    

    public labelContent(e: AxisLabelContentArgs): string {
        return `${ e.dataItem.time.substring(0, 2) }h`;
    }

    /**Per nascondere gli elementi che appaiono sulla griglia */
    public textContent(e: AxisLabelContentArgs): string {
      return '';
    }
  }
