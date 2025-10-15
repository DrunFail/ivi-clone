import styles from './AdminMainPageMessage.module.scss';
export default function AdminMainPageMessage() {
    return (
        <div className={styles.container}>
            <p>Выберите категорию из списка для управления</p>
        </div>
    );
}
