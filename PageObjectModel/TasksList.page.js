export class TasksList {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page){
        this.page=page
        this.createTaskLink=page.getByRole('link', { name: '+ Create Task' })
    }
    async createTaskClick(){
        await this.createTaskLink.click()
    }
}