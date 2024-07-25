document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('admissionForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting traditionally

        // Safely accessing each element by ID
        const semester = document.getElementById('semester') ? document.getElementById('semester').value : '';
        const stream = document.getElementById('stream') ? document.getElementById('stream').value : '';
        const studentName = document.getElementById('student-name') ? document.getElementById('student-name').value : '';
        const caste = document.getElementById('caste') ? document.getElementById('caste').value : '';

        // Get the current invoice number for this semester
        let invoiceNumber = localStorage.getItem(`invoiceNumber_${semester}`);
        if (invoiceNumber) {
            invoiceNumber = parseInt(invoiceNumber) + 1;
        } else {
            invoiceNumber = 1; // Start from 1 if no invoice exists for this semester
        }

        // Save the new invoice number
        localStorage.setItem(`invoiceNumber_${semester}`, invoiceNumber);

        const date = new Date().toLocaleDateString(); // Automatically set today's date

        // Store the data in localStorage
        const admissionData = JSON.stringify({ semester, stream, studentName, caste, date, invoiceNumber });
        localStorage.setItem('admissionData', admissionData);

        // Optionally open a new window or redirect user
        window.location.href = 'template.html'; // Redirect to the template page after form submission
    });
});
