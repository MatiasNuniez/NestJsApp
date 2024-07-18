import Swal from 'sweetalert2'
import { AlertSwalData } from '../login/interfacesLogin'

export const alertSwal = ({ title, text, icon, confirmButtonText }: AlertSwalData) => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: confirmButtonText
    });
};