export class LeadConvert {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page){
        this.page=page
        this.accCheck=page.getByRole('checkbox', { name: 'Account' })
        this.accTF=page.locator("//input[@data-name='name']").first()
        this.conCheck=page.getByRole('checkbox', { name: 'Contact' })
        this.accDD=page.locator("//div[@data-name='account']//button[@title='Select']")
        this.accText=page.locator("//input[@data-name='textFilter']")
        this.oppCheck=page.getByRole('checkbox', { name: 'Opportunity' })
        this.oppTF=page.locator("//input[@data-name='name']").last()
        this.amtTF=page.locator("//input[@data-name='amount']")
        this.closeDate=page.locator("//input[@data-name='closeDate']")//12.04.2026
        this.convertBtn = page.getByRole('button', { name: 'Convert' })
    }

    async convertToContact() {
        await this.conCheck.check()
        // await this.accDD.click()
        // await this.accText.fill(accName)
        // await this.page.getByRole('link', { name: accName }).click()
        await this.convertBtn.click()

    }

    async convertToAccount(accName){
        await this.accCheck.check()
        await this.accTF.fill(accName)
        await this.convertBtn.click()
    }

    async convertToOpportunity(oppName,amt,date){
        await this.oppCheck.check()
        await this.oppTF.fill(oppName)
        await this.amtTF.type(amt)
        await this.closeDate.type(date)
        await this.page.keyboard.press('Enter') 
        await this.convertBtn.click()
    }


}