'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Rounded from '../../common/RoundedButton/Rounded';
import Magnetic from '../../common/Magnetic/Magnetic';

export default function ContactMain() {
    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        org: '',
        services: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe9JWouNwV68pdzPZhfjmq_PlAbrMY7W6AHrQicaNvuOXQIGQ/formResponse';

        const formData = new URLSearchParams();
        formData.append('entry.1211313076', inputValues.name);
        formData.append('entry.1053213077', inputValues.email);
        formData.append('entry.758328858', inputValues.org);
        formData.append('entry.1034723582', inputValues.services);
        formData.append('entry.1955999451', inputValues.message);

        fetch(googleFormUrl, {
            method: 'POST',
            body: formData,
            mode: 'no-cors',
        })
        .then(() => {
            alert('Form Submitted Successfully');
            setInputValues({
                name: '',
                email: '',
                org: '',
                services: '',
                message: '',
            });
        })
        .catch(() => {
            alert('Form Submission Failed');
        });
    };

    const isFilled = (value) => value.trim() !== '';

    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <div className={styles.title}>
                    <h1 className={styles.hh}>Let's start a project together</h1>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    {[
                        { id: '01', label: "What's your name?", name: 'name', placeholder: 'Hitesh Thakur ..' },
                        { id: '02', label: "What's your email?", name: 'email', placeholder: 'Jhon@doe.com' },
                        { id: '03', label: "What's the name of your organization?", name: 'org', placeholder: 'Jhon & Doe' },
                        { id: '04', label: 'What services are you looking for?', name: 'services', placeholder: 'Web Design, Web Dev' },
                        { id: '05', label: 'Your message', name: 'message', placeholder: 'Hello Hitesh, can you help me with...*' },
                    ].map(({ id, label, name, placeholder }) => (
                        <div key={name} className={styles.formItem}>
                            <div className={styles.labelContainer}>
                                <h1>{id}</h1>
                                <label htmlFor={name} className={isFilled(inputValues[name]) ? styles.filled : ''}>
                                    {label}
                                </label>
                            </div>
                            <input
                                type="text"
                                name={name}
                                placeholder={placeholder}
                                value={inputValues[name]}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    ))}
                    <div className={styles.buttonContainer}>
                        {/* Use Rounded component directly for form submission */}
                        <Rounded
                            className={styles.button}
                            onClick={handleSubmit} // Trigger form submit when Rounded is clicked
                        >
                            <p>Submit</p>
                        </Rounded>
                    </div>
                </form>
            </div>
            <div className={styles.right}>
                <div className={styles.profileContainer}>
                    <img src="/images/bgg.jpg" alt="Profile" className={styles.profileImage} />
                    <div className={styles.arrow}>&#8600;</div>
                </div>
                <div className={styles.contactDetails}>
                    <Magnetic><h2>Contact Details</h2></Magnetic>
                    <p>hiteshthakur695@gmail.com</p>
                    <p>+91 78761 80311</p>
                </div>
                <div className={styles.socialLinks}>
                    <Magnetic><h2>Follow Me</h2></Magnetic>
                    <a href="https://github.com/HiteshO7" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.instagram.com/_hitesh.thakur/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://x.com/HiteshThakur77" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://www.linkedin.com/in/hitesh-thakur07/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </div>
    );
}
