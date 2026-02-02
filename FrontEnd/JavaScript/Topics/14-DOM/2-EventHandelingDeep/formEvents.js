const submit = document.querySelector("#submitBtn");
const form = document.querySelector("form");

//Submit Event :-
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(submit);
});

// Input Event :- Fires on EVERY keystroke
document.querySelector("#text").addEventListener("input", (e) => console.log(e.target.value.toLowerCase()));

//Focus Event :-
document.querySelector("#password").addEventListener("focus", e => e.target.style.color = "red");

//Blur Event :-
document.querySelector("#password").addEventListener("blur", e => e.target.style.color = "yellow");

//Change Event :- Fires ONCE when done editing (on blur)
document.querySelector("input").addEventListener("change", e => console.log(e.target.value));

/**
 * 
 * BEST PRACTICES
--------------

1. ALWAYS preventDefault() on submit
   - Prevents page reload
   - Allows custom handling

2. Use INPUT for real-time feedback
   - Search suggestions
   - Character counters
   - Live validation

3. Use CHANGE for final validation
   - After user finishes typing
   - Saves unnecessary checks

4. Use FOCUS to help users
   - Show hints and examples
   - Highlight active field

5. Use BLUR for validation
   - Validate after editing done
   - Format values (add $ sign)

6. Clear errors on focus
   - Better UX
   - Gives user a fresh start

7. Disable submit during processing
   - Prevents double submission
   - Shows loading state

8. Use focusin/focusout for delegation
   - They bubble (focus/blur don't)
   - Cleaner code
 * 
 */