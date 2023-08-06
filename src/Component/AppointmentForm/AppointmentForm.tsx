import React, {useState} from "react";

interface Props {
  toggleForm: () => void;
}

const AppointmentForm: React.FC<Props> = ({ toggleForm }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Отправка данных формы на сервер (если необходимо)
    // После отправки можно сбросить поля формы и вернуться к основному блоку
    setName('');
    setPhoneNumber('');
    toggleForm();
  }

  return (
    <div className="appointment-form-container">
      <div className="appointment-form-box">
        <p>консультация</p>
        <h3>Оставить заявку</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Ваше полное имя</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder='Введите свое полное имя'
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phoneNumber">Ваш номер телефона</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder='Введите свой номер телефона'
              required
            />
          </div>
          <button type="submit">Оставить заявку</button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;