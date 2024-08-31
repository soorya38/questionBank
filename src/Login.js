import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import collegeLogo from './assets/CollegeLogo.png';

export default function Login() {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div style={styles.loginBackground}>
            <div style={styles.loginPanel}>
                <img src={collegeLogo} alt="college logo" style={styles.collegeLogo} />

                <p style={styles.controllerText}>OFFICE OF CONTROLLER OF EXAMINATION</p>

                <div style={styles.inputContainer}>
                    <label style={styles.label}>Enter Register No</label>
                    <input type="text" style={styles.input} placeholder="714021104033" />
                </div>

                <div style={styles.inputContainer}>
                    <label style={styles.label}>Date Of Birth</label>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select a date"
                        showYearDropdown
                        scrollableYearDropdown
                        customInput={<CustomInput />}
                    />
                </div>

                <button style={styles.button}>Get Result</button>
            </div>
        </div>
    );
}

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button style={styles.datePickerInput} onClick={onClick} ref={ref}>
        {value || '16/05/2033'}
    </button>
));

const styles = {
    loginBackground: {
        backgroundColor: '#FFD700',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginPanel: {
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '30px',
        width: '350px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    collegeLogo: {
        width: '100%',
        height: 'auto',
        marginBottom: '10px',
    },
    controllerText: {
        fontSize: '14px',
        color: '#000',
        marginBottom: '20px',
    },
    inputContainer: {
        marginBottom: '15px',
        textAlign: 'left',
        width: '100%',
    },
    label: {
        fontSize: '14px',
        color: '#0C9E36',   
        marginBottom: '5px',
        display: 'block',
        textAlign: 'left',
    },
    input: {
        width: '100%',
        paddingTop: '10px',
        paddingBottom: '10px',
        marginLeft: '-5px',
        borderRadius: '20px',
        border: '2px solid #0C9E36',
        outline: 'none',
        textAlign: 'center',
        fontSize: '14px',
    },
    datePickerInput: {
        width: '100%',
        padding: '10px',
        borderRadius: '20px',
        border: '2px solid #0C9E36',
        outline: 'none',
        textAlign: 'center',
        fontSize: '14px',
        backgroundColor: '#fff',
        cursor: 'pointer',
        paddingLeft: '140px',
        paddingRight: '140px',
    },
    button: {
        backgroundColor: '#008000',
        color: '#fff',
        border: 'none',
        borderRadius: '20px',
        padding: '12px 20px',
        cursor: 'pointer',
        width: '100%',
        fontSize: '16px',
        marginTop: '20px',
    },
};
