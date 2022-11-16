<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>I am Google</title>
</head>
<body>
    <center>
        <h1>PHP search</h1>
        <label>In your mother in law, what you want?</label>
        <form method="get" action="">
            <input name="results"/>
            <input type="submit"/>
        </form>
        <?php
            $search = $_GET['results'];
            if (isset($_GET['results']) && $_GET['results'] != ""){
                    echo "<br/>your search result array:<hr/><br/>";
                    $url = "https://www.googleapis.com/customsearch/v1?key='sjdhfksjdfsf'&q="
                    ."q=".str_replace(' ','%20',$_GET['results']);
                    //zeev mindali->zeev%20mindali

                    //send request
                    //note how referer is set manually

                    //create instance of curl...
                    $ch = curl_init();
                    //give the url that we want to get
                    curl_setopt($ch, CURLOPT_URL,$url);
                    //return the result in json format
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
                    //tell the web which server send the command
                    curl_setopt($ch, CURLOPT_REFERER, 'http://www.google.com');
                    //execute the command
                    $body = curl_exec($ch);
                    //close the connection....
                    curl_close($ch);

                    //now process the json string
                    $json = json_decode($body);

                    //print out the array
                    print_r($json);

                    //have fun with the results.....
            }
        ?>
    </center>
</body>
</html>