window.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
        resolve({
            ok: true,
            json: () => { return 'this is a global unit test ployfill for fetch'; }
        });
    });
});