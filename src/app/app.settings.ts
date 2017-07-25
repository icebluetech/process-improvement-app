export class AppSettings {
    public static get CONTENT_PAGE_URL(): string {
        var url_sections = window.location.toString().split('/')
        var index_of_lastPage = url_sections.length - 1;
        var url = url_sections[index_of_lastPage];
        return url;
    }

    public static get APP_BASE_HREF(): string {
        var url_sections = window.location.toString().split('/')
        var index_of_lastPage = url_sections.length - 1;
        url_sections.splice(0, 2);
        url_sections.splice(index_of_lastPage, 1);
        var path = url_sections.join("/");
        alert(path);
        return path;
    }

    public static get HOST_NAME(): string {
        return window.location.hostname=='localhost111'? 'http://localhost:49634':'http://process-improvement-api.azurewebsites.net';
    }

    public static SIDEBAR_COLOR: string;


}

