/// <reference types="cypress" />



describe("To Automate Tech Challenge from Zelar Soft ", ()=>{

    beforeEach(()=>{
        cy.visit('http://automationpractice.com/index.php');
    })

    it('Should verify and validate scenario one',()=>{
        cy.get('.blockbestsellers').contains('Best Sellers').click();
        cy.wait(1000);
        cy.readFile('cypress\\fixtures\\example.json').then(name=>{
            var product = name.productName
            cy.get('input#search_query_top').type(product);
            cy.wait(3000);
            cy.get('.ac_even').click({force:true});
            
            // cy.get('.button-search').click();
        })
        // cy.get('.product_list').contains('Add to cart').first().click();
        cy.get('p#add_to_cart  span').click();
        cy.get('.layer_cart_product').should('contain.text','successfully added');
        cy.wait(1000);
        var quantity = cy.get('#layer_cart_product_quantity').then($el  =>{
            quantity = $el.text();
            quantity = quantity.trim().toString();
            
            var actualQuantity = quantity.split(" ")[0];
            cy.log('quantity as of now selected is ' + actualQuantity);
            cy.writeFile('cypress\\fixtures\\details.json', {actualQuantity});
            cy.get('.layer_cart_product').should('contain.text',actualQuantity)
            
        // cy.pause()
        var price = cy.get('#layer_cart_product_price').then($el =>{
            price = $el.text();
            price = price.trim().toString();
            var totalPrice = price.split("$")[1];
            cy.log('totla price is ' + totalPrice);
            cy.writeFile('cypress\\fixtures\\price.json', {totalPrice});
            cy.get('.layer_cart_product').should('contain.text',totalPrice);
        })      
        
        
        cy.get("span[title='Continue shopping'] > span").click();
        cy.wait(1000);
        cy.get('[title="View my shopping cart"]').trigger('mouseover');
        cy.wait(1000);
        cy.get('.remove_link [rel]').click({force:true});
        cy.wait(1000);
        cy.get('.ajax_cart_no_product').should('contain.text','(empty)');

    })

    
})
it('Should verify and validate second scenario',()=>{
    cy.get('.blockbestsellers').contains('Best Sellers').click();
    cy.wait(1000);
    cy.readFile('cypress\\fixtures\\example.json').then(name=>{
        var product = name.productName1
        cy.get('input#search_query_top').type(product);
        cy.wait(3000);
        cy.get('.ac_even').click({force:true});
               
    })
    cy.get('.button-plus > span').click();
    cy.get('p#add_to_cart  span').click();
    cy.get('.layer_cart_product').should('contain.text','successfully added');
        cy.wait(1000);
        var quantity = cy.get('#layer_cart_product_quantity').then($el  =>{
            quantity = $el.text();
            quantity = quantity.trim().toString();
            
            var actualQuantity = quantity.split(" ")[0];
            cy.log('quantity as of now selected is ' + actualQuantity);
            cy.writeFile('cypress\\fixtures\\details.json', {actualQuantity});
            cy.get('.layer_cart_product').should('contain.text',actualQuantity)
            
        // cy.pause()
        var price = cy.get('#layer_cart_product_price').then($el =>{
            price = $el.text();
            price = price.trim().toString();
            var totalPrice = price.split("$")[1];
            cy.log('totla price is ' + totalPrice);
            cy.writeFile('cypress\\fixtures\\price.json', {totalPrice});
            cy.get('.layer_cart_product').should('contain.text',totalPrice);
        })      
        
        
        cy.get("span[title='Continue shopping'] > span").click();
        cy.wait(1000);
        cy.get('[title="View my shopping cart"]').trigger('mouseover');
        cy.wait(1000);
        cy.get('.remove_link [rel]').click({force:true});
        cy.wait(1000);
        cy.get('.ajax_cart_no_product').should('contain.text','(empty)');

    })

    
})
})


