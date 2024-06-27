<?php
    $foods = array(
        0 => array(
            "photoUrl" => "https://i.nefisyemektarifleri.com/2022/05/29/orijinal-antep-usulu-patlican-kebabi-3.jpg",
            "title" => "Patlıcan Kebabı",
            "description" =>"Patlıcan kebabı, sığır ve kuzu gibi ince doğranmış (kıyılmamış) etle sıra halinde katmanlanan patlıcan parçalarından oluşur. Şişe geçirilip ateşte pişirilebilir. Fırında patlıcan kebabı bir tabakta şişle veya yuvarlak bir tavaya dizilmiş malzemelerle, karabiber gibi baharatlarla yapılabilir ve çiğ soğan ve yufka veya lavaş adı verilen yumuşak bir Türk ekmeği ile yenebilir. Gaziantep ve Güney Türkiye'nin diğer bölgelerinde, insanlar geleneksel olarak evde arta kalan patlıcan ve tavuk etinden bir tepsi patlıcan kebabı hazırlar, sonra odun ateşinde pişmek üzere yerel bir fırına götürürdü.",
        ),
        1 => array(
            "photoUrl" => "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Lahmacun.jpg/330px-Lahmacun.jpg",
			"title" => "Lahmacun",
			"description" => "Lahmacun, açılmış hamurun üzerine kıyma, maydanoz, soğan, sarımsak, karabiber ve isot (kırmızı biber) gibi baharatlarla hazırlanan malzeme sürüldükten sonra taş fırında pişirilmesiyle yapılan Orta Doğu mutfağında bir çeşit içli pidedir. İngilizcede zaman zaman Türk pizzası, veya Ermeni pizzası, olarak adlandırılsa da Orta Doğu kökenli bir yemektir. Pizzadan farklı olarak peynir kullanılmaz ve hamur daha incedir. Lahmacun; Türkiye, Azerbaycan, Ermenistan, Lübnan, Suriye, İsrail ve dünyadaki Türk topluluklarında popüler bir yemektir.",
        ),
        2 => array(
            "photoUrl" => "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Yuvarlama_%28soup%29.jpg/330px-Yuvarlama_%28soup%29.jpg",
			"title" => "Yuvalama",
			"description" => "Yuvalama veya Yuvarlama, Gaziantep mutfağına ait sulu ve kıvam olarak çorbaya yakın bir yemektir. Gaziantep'te bayram yemeği olarak imece usulü yapılmaktadır. Ramazan Bayramının geleneksel bayram yemeğidir. Antep Yuvarlaması / Antep Yuvalaması 13.01.2017 tarihinde Türk Patent ve Marka Kurumu tarafından tescillenmiş ve coğrafi işaret almıştır.",
        ),
    );
    header("Access-Control-Allow-Origin: *");
    echo json_encode($foods, JSON_UNESCAPED_SLASHES);
?>