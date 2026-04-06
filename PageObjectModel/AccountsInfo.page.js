export class AccountsInfo{
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
        this.page=page
        this.accText=page.locator("//div[@data-name='name']/span")
    }
}