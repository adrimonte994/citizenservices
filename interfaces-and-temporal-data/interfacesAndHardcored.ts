/**
 * Temática de una queja.
 */
export enum Topic {
    sanidad = 'SANIDAD',
    seguridad = 'SEGURIDAD',
    alimentacion = 'ALIMENTACION',
    educacion = 'EDUCACION',
    privacidad = 'PRIVACIDAD'
}

/**
 * Dirección de la queja.
 */
 export interface Direction {
    cp: number; // ID de dirección (único e unívoco)
    location: string[]; // array con lat y long 
    comunidad: string;
    provincia: string;
    municipio: string;
    distrito?: string;
}

export const directions: Direction[] = [
    {
        cp: 28030, 
        location: ['40.40915698260087', '-3.6454567048210724'],
        comunidad: 'Comunidad de Madrid',
        provincia: 'Madrid',
        municipio: 'Madrid',
        distrito: 'Moratalaz'
    }, {
        cp: 28031,
        location: ['40.37971694744946', '-3.6217080839251117'],
        comunidad: 'Comunidad de Madrid',
        provincia: 'Madrid',
        municipio: 'Madrid',
        distrito: 'Villa de Vallecas'
    }, {
        cp: 28800,
        location: ['40.48456263183492', '-3.3684324226179796'],
        comunidad: 'Comunidad de Madrid',
        provincia: 'Madrid',
        municipio: 'Alcalá de Henares'
    }, {
        cp: 46000,
        location: ['39.469960457173876', '-0.3761711926485558'],
        comunidad: 'Comunidad Valenciana',
        provincia: 'Valencia',
        municipio: 'Valencia',
    }
]

/**
 * Quejas creadas por los usuarios de la app.
 */
 export interface Complain {
    id: number; // ID de queja (único e unívoco)
    title: string;
    description: string;
    likes: number; // Número de likes de la queja
    initDate: Date; // Fecha de registro de la queja
    topic: Topic; // Temática de la queja
    cp: number;
}

export const complains: Complain[] =  [
    {
        id: 0, 
        title: 'Queja 0. MTZ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lectus a urna iaculis mollis sit amet nec erat. Aenean suscipit, sapien a dictum lobortis, nulla risus bibendum nisl, sed efficitur nisi ligula quis sapien. Morbi eget turpis tincidunt, tempus tellus vulputate, aliquet elit. Mauris semper, ligula a scelerisque interdum, odio risus faucibus odio, vel facilisis diam urna vitae felis. Aliquam et aliquam ligula. Aenean porta mi in odio commodo convallis. Nam sit amet pulvinar dui, vitae ullamcorper massa.',
        likes: 0, 
        initDate: new Date(),
        topic: Topic.alimentacion,
        cp: 28030
    }, {
        id: 1, 
        title: 'Queja 1. Vallecas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lectus a urna iaculis mollis sit amet nec erat. Aenean suscipit, sapien a dictum lobortis, nulla risus bibendum nisl, sed efficitur nisi ligula quis sapien. Morbi eget turpis tincidunt, tempus tellus vulputate, aliquet elit. Mauris semper, ligula a scelerisque interdum, odio risus faucibus odio, vel facilisis diam urna vitae felis. Aliquam et aliquam ligula. Aenean porta mi in odio commodo convallis. Nam sit amet pulvinar dui, vitae ullamcorper massa.',
        likes: 0, 
        initDate: new Date('05-11-2005'),
        topic: Topic.educacion,
        cp: 28031
    },  {
        id: 2, 
        title: 'Queja 2. MTZ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lectus a urna iaculis mollis sit amet nec erat. Aenean suscipit, sapien a dictum lobortis, nulla risus bibendum nisl, sed efficitur nisi ligula quis sapien. Morbi eget turpis tincidunt, tempus tellus vulputate, aliquet elit. Mauris semper, ligula a scelerisque interdum, odio risus faucibus odio, vel facilisis diam urna vitae felis. Aliquam et aliquam ligula. Aenean porta mi in odio commodo convallis. Nam sit amet pulvinar dui, vitae ullamcorper massa.',
        likes: 10, 
        initDate: new Date('16-01-2017'),
        topic: Topic.sanidad,
        cp: 28030,
    }, {
        id: 10, 
        title: 'Queja 3. Alcalá',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lectus a urna iaculis mollis sit amet nec erat. Aenean suscipit, sapien a dictum lobortis, nulla risus bibendum nisl, sed efficitur nisi ligula quis sapien. Morbi eget turpis tincidunt, tempus tellus vulputate, aliquet elit. Mauris semper, ligula a scelerisque interdum, odio risus faucibus odio, vel facilisis diam urna vitae felis. Aliquam et aliquam ligula. Aenean porta mi in odio commodo convallis. Nam sit amet pulvinar dui, vitae ullamcorper massa.',
        likes: 0, 
        initDate: new Date('27/02/2009'),
        topic: Topic.privacidad,
        cp: 28800,
    }, {
        id: 150, 
        title: 'Queja 4. Valencia',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lectus a urna iaculis mollis sit amet nec erat. Aenean suscipit, sapien a dictum lobortis, nulla risus bibendum nisl, sed efficitur nisi ligula quis sapien. Morbi eget turpis tincidunt, tempus tellus vulputate, aliquet elit. Mauris semper, ligula a scelerisque interdum, odio risus faucibus odio, vel facilisis diam urna vitae felis. Aliquam et aliquam ligula. Aenean porta mi in odio commodo convallis. Nam sit amet pulvinar dui, vitae ullamcorper massa.',
        likes: 5000, 
        initDate: new Date('18-07-2012'),
        topic: Topic.seguridad,
        cp: 46000,
    }
]

/**
 * Usuarios de la aplicación.
 */
export interface User {
    name: string; // ID de usuario (único e unívoco)
    mail: string;
    complains: Complain[]; // Lista de quejas creadas por el usuario
    likes: number[]; // Lista con los ids de las quejas a las que se ha dado like
}

export const users: User[] = [
    {
        name: 'Usuario 1',
        mail: 'user1@gmail.com',
        complains: [
            {
                id: 0, 
                title: 'Queja 0. MTZ',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lectus a urna iaculis mollis sit amet nec erat. Aenean suscipit, sapien a dictum lobortis, nulla risus bibendum nisl, sed efficitur nisi ligula quis sapien. Morbi eget turpis tincidunt, tempus tellus vulputate, aliquet elit. Mauris semper, ligula a scelerisque interdum, odio risus faucibus odio, vel facilisis diam urna vitae felis. Aliquam et aliquam ligula. Aenean porta mi in odio commodo convallis. Nam sit amet pulvinar dui, vitae ullamcorper massa.',
                likes: 0, 
                initDate: new Date(),
                topic: Topic.alimentacion,
                cp: 28030
            }, {
                id: 1, 
                title: 'Queja 1. Vallecas',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lectus a urna iaculis mollis sit amet nec erat. Aenean suscipit, sapien a dictum lobortis, nulla risus bibendum nisl, sed efficitur nisi ligula quis sapien. Morbi eget turpis tincidunt, tempus tellus vulputate, aliquet elit. Mauris semper, ligula a scelerisque interdum, odio risus faucibus odio, vel facilisis diam urna vitae felis. Aliquam et aliquam ligula. Aenean porta mi in odio commodo convallis. Nam sit amet pulvinar dui, vitae ullamcorper massa.',
                likes: 0, 
                initDate: new Date('05-11-2005'),
                topic: Topic.educacion,
                cp: 28031
            }
        ],
        likes: [1, 10, 150]
    }, {
        name: 'Usuario 2',
        mail: 'user2@gmail.com',
        complains: [
            {
                id: 2, 
                title: 'Queja 2. MTZ',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lectus a urna iaculis mollis sit amet nec erat. Aenean suscipit, sapien a dictum lobortis, nulla risus bibendum nisl, sed efficitur nisi ligula quis sapien. Morbi eget turpis tincidunt, tempus tellus vulputate, aliquet elit. Mauris semper, ligula a scelerisque interdum, odio risus faucibus odio, vel facilisis diam urna vitae felis. Aliquam et aliquam ligula. Aenean porta mi in odio commodo convallis. Nam sit amet pulvinar dui, vitae ullamcorper massa.',
                likes: 10, 
                initDate: new Date('16-01-2017'),
                topic: Topic.sanidad,
                cp: 28030,
            }, {
                id: 10, 
                title: 'Queja 3. Alcalá',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lectus a urna iaculis mollis sit amet nec erat. Aenean suscipit, sapien a dictum lobortis, nulla risus bibendum nisl, sed efficitur nisi ligula quis sapien. Morbi eget turpis tincidunt, tempus tellus vulputate, aliquet elit. Mauris semper, ligula a scelerisque interdum, odio risus faucibus odio, vel facilisis diam urna vitae felis. Aliquam et aliquam ligula. Aenean porta mi in odio commodo convallis. Nam sit amet pulvinar dui, vitae ullamcorper massa.',
                likes: 0, 
                initDate: new Date('27/02/2009'),
                topic: Topic.privacidad,
                cp: 28800,
            }
        ],
        likes: [0, 1, 2]
    }, {
        name: 'Usuario 3',
        mail: 'user3@gmail.com',
        complains: [
            {
                id: 10, 
                title: 'Queja 3. Alcalá',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lectus a urna iaculis mollis sit amet nec erat. Aenean suscipit, sapien a dictum lobortis, nulla risus bibendum nisl, sed efficitur nisi ligula quis sapien. Morbi eget turpis tincidunt, tempus tellus vulputate, aliquet elit. Mauris semper, ligula a scelerisque interdum, odio risus faucibus odio, vel facilisis diam urna vitae felis. Aliquam et aliquam ligula. Aenean porta mi in odio commodo convallis. Nam sit amet pulvinar dui, vitae ullamcorper massa.',
                likes: 0, 
                initDate: new Date('27/02/2009'),
                topic: Topic.privacidad,
                cp: 28800,
            }, {
                id: 150, 
                title: 'Queja 4. Valencia',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lectus a urna iaculis mollis sit amet nec erat. Aenean suscipit, sapien a dictum lobortis, nulla risus bibendum nisl, sed efficitur nisi ligula quis sapien. Morbi eget turpis tincidunt, tempus tellus vulputate, aliquet elit. Mauris semper, ligula a scelerisque interdum, odio risus faucibus odio, vel facilisis diam urna vitae felis. Aliquam et aliquam ligula. Aenean porta mi in odio commodo convallis. Nam sit amet pulvinar dui, vitae ullamcorper massa.',
                likes: 5000, 
                initDate: new Date('18-07-2012'),
                topic: Topic.seguridad,
                cp: 46000,
            }
        ],
        likes: []
    }
];