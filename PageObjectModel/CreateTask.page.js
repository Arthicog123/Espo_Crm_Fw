export class CreateTask {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page){
        this.page=page
        this.nameTF=page.locator("//input[@data-name='name']")
        this.accDD=page.locator("//div[@data-name='parent']//button[@data-action='selectLink']")
        this.accTF=page.locator("//input[@data-name='textFilter']")
        //this.accList=page.locator("//td[@data-name='name']/a")
        this.priorityDD=page.locator("//div[@data-name='priority' and @class='field']")
        this.taskSDate=page.locator("//input[@data-name='dateStart']")
        this.taskEDate=page.locator("//input[@data-name='dateEnd']")
        this.saveBtn=page.getByRole('button', { name: 'Save' })
    }

    async createTask(name,accName,option,sDate,eDate) {
        await this.nameTF.fill(name)
        if (accName) {
            await this.accDD.click()
            await this.accTF.fill(accName)
            await this.page.keyboard.press('Enter')
            await this.page.getByRole('link', { name: accName }).click()
        }
        if (option) {
        await this.priorityDD.click()
        await this.page.locator("//div[@data-selectable]",{hasText:option}).click()
        }
        await this.taskSDate.type(sDate)
        await this.page.keyboard.press('Enter') 
        await this.taskEDate.type(eDate)
        await this.page.keyboard.press('Enter') 
        await this.saveBtn.click()
    }

}
