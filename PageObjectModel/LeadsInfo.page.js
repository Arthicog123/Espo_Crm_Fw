export class LeadsInfo{
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
        this.page=page
        this.campText=page.locator("//div[@data-name='name']/div")
        this.statusText=page.locator("//div[@data-name='status']/span")
        this.accText=page.locator("//div[@data-name='createdAccount' and @class='field']")
        this.conText=page.locator("//div[@data-name='createdContact' and @class='field']")
        this.oppText=page.locator("//div[@data-name='createdOpportunity' and @class='field']")
        this.convertBtn = page.getByRole('button', { name: 'Convert' })
    }
    async convertClick(){
        this.convertBtn.click()
    }
}