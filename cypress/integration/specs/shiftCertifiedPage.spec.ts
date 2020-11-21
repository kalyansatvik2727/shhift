// Navigate to https://shift.com/certified

// assert the header >>> Shift Certified. Inspected. Guaranteed. A new look for used cars.

// assert the headers 

// : >> What's included in Shift's Certification?
// >> Not every car becomes Shift Certified
// >> Total transparency.
// >> Love it or bring it back: our 7-day guarantee
// >>Free 30-day powertrain warranty included
// >>Extended coverage available
// >>Meet our trusted mechanics
// >>Byron Lew, Master Technician
// >>Denis Diep, Master Technician
// >>Find the car your mechanic would buy and button browse cars

// in all of the above,assert any text thats under the header.

// assert and test whatever you feel like is needed.

describe('Shift | Certified page',()=>{
    it('Certified page validations',()=>{
        cy.visit('https://shift.com/certified')

        //shift certified header validation
        cy.get('h1',{timeout:100000}).eq(0).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Shift Certified')
        })

        //shift certified text validation
        cy.get('div p',{timeout:100000}).eq(0).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Inspected. Guaranteed. A new look for used cars.')
        })

        //What's included in Shift's Certification?
        cy.get('h2',{timeout:100000}).eq(0).invoke('text').then((text)=>{
            cy.wrap(text).should('eq',"What's included in Shift's Certification?")
        })
        

        //Not every car becomes Shift Certified
        cy.get('h2',{timeout:100000}).eq(1).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Not every car becomes Shift Certified')
        })
        cy.get('div p',{timeout:100000}).eq(1).invoke('text').then((text)=>{
            cy.wrap(text).should('eq',"Being Shift Certified is something special. It’s that little bit extra that makes a great car feel like a fantastic deal. And we're picky. We say “no” to lots of vehicles people want to sell to us — so it’s easier for you to say yes to the one you want.")
        })        

        //Total transparency
        cy.get('h2',{timeout:100000}).eq(2).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Total transparency.')
        })
        cy.get('div p',{timeout:100000}).eq(3).invoke('text').then((text)=>{
            cy.wrap(text).should('eq',"Findings from our inspection are compiled into an inspection report so that you know as much about the car as we do.")
        })
       

        //Love it or bring it back: our 7-day guarantee
        cy.get('h2',{timeout:100000}).eq(3).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Love it or bring it back: our 7-day guarantee')
        })
        cy.get('div p',{timeout:100000}).eq(4).invoke('text').then((text)=>{
            cy.wrap(text).should('eq',"If you’re not happy with your purchase for whatever reason, you have seven days or 200 miles (whichever comes first) to return your car for a full refund.")
        })
        

        //Free 30-day powertrain warranty included
        cy.get('h2',{timeout:100000}).eq(4).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Free 30-day powertrain warranty included')
        })
        cy.get('div p',{timeout:100000}).eq(5).invoke('text').then((text)=>{
            cy.wrap(text).should('eq',"Peace of mind matters at Shift, which is why we include a 30-day powertrain warranty—free of charge—with every Shift Certified vehicle.")
        })
        

        //Extended coverage available
        cy.get('h2',{timeout:100000}).eq(5).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Extended coverage available')
        })
        cy.get('div p',{timeout:100000}).eq(6).invoke('text').then((text)=>{
            cy.wrap(text).should('contain',"Want protection beyond 30-days? Our Protection Plans pay for the cost of repairs, towing, roadside assistance, and rental cars. Can be used at any certified mechanic")
        })
        
        //Meet our trusted mechanics
        cy.get('h2',{timeout:100000}).eq(6).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Meet our trusted mechanics')
        })
        cy.get('div p',{timeout:100000}).eq(7).invoke('text').then((text)=>{
            cy.wrap(text).should('contain',"Our team of Master ASE Technicians and ASE-Certified mechanics makes sure every car we sell meets the highest standards of quality and safety.")
        })

        cy.get('h3',{timeout:100000}).eq(0).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Byron Lew, Master Technician')
        })

        cy.get('h3',{timeout:100000}).eq(1).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Denis Diep, Master Technician')
        })

        cy.get('h2',{timeout:100000}).eq(7).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Find the car your mechanic would buy')
        })

        cy.get('button span',{timeout:100000}).invoke('text').then((text)=>{
            cy.wrap(text).should('eq','Browse cars')
        })
    })
})
