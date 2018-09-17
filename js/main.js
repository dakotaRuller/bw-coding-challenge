// defining all the variables
let infoTab = document.getElementById('Info');
let ticketsTab = document.getElementById('Tickets');
let infoDisplay = infoTab.childNodes[1];
let ticketsDisplay = ticketsTab.childNodes[1];
let infoContent = document.getElementById('ContentInfo');
let ticketContent = document.getElementById('ContentTickets');
let checkoutBtn = document.getElementById('CheckoutBtn');
let bubbles = document.querySelectorAll('.btn-bubble');

// defining the redemtions state
const redemptionState = {
  bubblesSelected: 0
};

//setting the section display
const displayItems = () => {
  if(infoDisplay.classList.contains('active-tab')) {
    ticketContent.classList.toggle('inactive');
    checkoutBtn.classList.toggle('inactive');
  } else if(ticketsDisplay.classList.contains('active-tab')) {
    infoContent.classList.toggle('inactive');
  }
}
const toggleActive = (tab) => {
  if(!tab.classList.contains('active-tab')) {
    infoDisplay.classList.toggle('active-tab');
    ticketsDisplay.classList.toggle('active-tab');
    infoContent.classList.toggle('inactive');
    ticketContent.classList.toggle('inactive');
    checkoutBtn.classList.toggle('inactive');
    }
}

infoTab.addEventListener('click', () => {
  toggleActive(infoDisplay);
  }
)
ticketsTab.addEventListener('click', () => {
  toggleActive(ticketsDisplay);
  }
)

displayItems();


//setting the tickets functionality

//selection bubble functionality
(() => {
  bubbles.forEach(bubble => {
        bubble.addEventListener('click', () => {
          if(bubble.classList.contains('selected-bubble')) {
            bubble.classList.toggle('selected-bubble');
            redemptionState.bubblesSelected -= 1;
          } else {
            bubble.classList.toggle('selected-bubble');
            redemptionState.bubblesSelected += 1;
          }
        }
      )
    }
  )
})();

//checout button functionality
(() => {
  bubbles.forEach(bubble => {
        bubble.addEventListener('click', () => {
          if(redemptionState.bubblesSelected >= 1) {
          checkoutBtn.classList.add('submit');
        } else {
          checkoutBtn.classList.remove('submit');
          }
        }
      )
    }
  )
})();
