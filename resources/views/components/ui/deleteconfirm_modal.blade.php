    <div class="fixed z-10 inset-0 invisible overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true" id="Modal_delconfirm">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                        <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <x-svg.danger-icon/>
                        </div>
                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                Biztosan törli a projektet?
                            </h3>
                            <div class="mt-2">
                                <p class="text-sm text-gray-500">
                                    Biztosan törli a projektet? A művelet nem vonható vissza és a projekt hozzárendelt kontaktlistájáról is törli az értesítendő személyek nevét.
                                </p>
                                <h3>A projekt adatai:</h3>
                                <p>Projektnév: <span id="delconfirmProjectinfo_name"></span></p>
                                <p>Státusz: <span id="delconfirmProjectinfo_state"></span></p>
                                <p>Leírás: <span id="delconfirmProjectinfo_desc"></span></p>
                                <p>Kontaktok: <span id="delconfirmProjectinfo_contacts"></span></p>
                                <p>Létrehozva: <span id="delconfirmProjectinfo_created"></span></p>
                                <p>Módosítva: <span id="delconfirmProjectinfo_lastsaved"></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button type="button" id="modal_exec_confirmed_delete" onclick="delete()" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                        Törlés
                    </button>
                    <button type="button" class="closeModal_delconfirm mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        Mégse
                    </button>
                </div>
            </div>
        </div>
    </div>
