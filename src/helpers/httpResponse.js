export const successo = (body) => {
    return {
        success: true,
        statusCode: 500,
        body
    }

}

export const naoEncontrado = (body) => {
    return {
        success: false,
        statusCode: 400,
        body
    }
}

export const erroServidor = (error) => {
    return {
        success: false,
        statusCode: 500, 
        body: error
    }
}
