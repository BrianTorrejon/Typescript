enum Role {
    Doctor,
    Asistente,
    Administrativo
}

interface Staff {
    name: string;
    email: string;
    role: Role;
}

const medico = {
    name: "Martin",
    email: "martin@gmail.com",
    role: Role.Doctor
}

const imprimirStaff = (staff: Staff) => {
    console.log(staff)
}

imprimirStaff(medico)