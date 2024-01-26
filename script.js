    function handleInput(input) {
            const nextInput = input.nextElementSibling;
            const prevInput = input.previousElementSibling;

            if (input.value !== '') {
                if (nextInput) {
                    nextInput.focus();
                }
            } else {
                if (prevInput) {
                    prevInput.focus();
                }
            }
        }

        function handleBackspace(input) {
            const prevInput = input.previousElementSibling;

            if (event.key === 'Backspace' && input.value === '' && prevInput) {
                event.preventDefault();
                prevInput.focus();
            }
        }