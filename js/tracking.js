// JS Check
console.log("JS tracking.js loaded")

// GTM Check
if (typeof dataLayer === 'undefined') {
    console.error('GTM not loaded, dataLayer is missing')
}

// Track Button Clicks
function trackButton(selector, buttonName) {
    const button = document.querySelector(selector)
    
    if (!button) {
        console.warn(`Missing: ${selector}`)
        return
    }
    button.addEventListener('click', function(){
        dataLayer.push({
            event: 'button_click',
            button_name: buttonName
        })
        console.log(`Tracked: ${buttonName}`)
    })
}

// Track Link Clicks
function trackLink(selector, linkName) {
    const link = document.querySelector(selector)
    
    if (!link) {
        console.warn(`Missing: ${selector}`)
        return
    }
    link.addEventListener('click', function() {
        dataLayer.push({
            event: 'link_click',
            link_name: linkName
        })
        console.log(`Tracked: ${linkName}`)
    })
}


trackButton("#btn-signup", "Sign Up")
trackButton("#btn-learn", "Learn More")
trackLink("#link-pricing", "View Pricing")
trackLink("#link-contact", "Contact Us")


// Add tracking below
// trackButton("#btn-signup", "Sign Up")
// trackLink("#link-pricing", "View Pricing")