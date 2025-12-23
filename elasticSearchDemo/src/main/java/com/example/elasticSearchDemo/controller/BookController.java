package com.example.elasticSearchDemo.controller;

import com.example.elasticSearchDemo.vo.BookVO;
import com.example.elasticSearchDemo.vo.NaverResultVO;
import com.fasterxml.jackson.databind.JsonMappingException;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.JsonProcessingException;

import java.net.URI;
import java.util.List;

import static java.awt.SystemColor.text;

@Controller
public class BookController {

    @GetMapping("/book/list")
    public String list(@RequestParam("text") String text, Model model){
        //네이버 검색 API 요청
        String clientId = "t4nXUrT4ciHWuYDcrSiL";
        String clientSecret = "hCAmyzJqLl";

        //String apiURL 및 테스트 = "https://openapi.naver.com/v1/search/blog?query=" + text;    // JSON 결과
        URI uri = UriComponentsBuilder
                .fromUriString("https://openapi.naver.com")
                .path("/v1/search/book.json")
                .queryParam("query", text)
                .queryParam("display", 10)
                .queryParam("start", 1)
                .queryParam("sort", "sim")
                .encode()
                .build()
                .toUri();

        //Spring 요청 제공 클래스
        RequestEntity<Void> req = RequestEntity
                .get(uri)
                .header("X-Naver-Client-Id", clientId)
                .header("X-Naver-Client-Secret", clientSecret)
                .build();

        //Spring 제공 restTemplate
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> resp = restTemplate.exchange(req, String.class);

        //JSON 파싱 (JSON 문자열을 객체로 만듦, 문서화)
        ObjectMapper om = new ObjectMapper();
        NaverResultVO resultVO = null;

        try {
            resultVO = om.readValue(resp.getBody(), NaverResultVO.class);
        } catch (JsonMappingException e) {
            e.printStackTrace();
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        List<BookVO> books =resultVO.getItems();	// books를 list.html에 출력 -> model 선언
        model.addAttribute("books", books);


        return "/book/list";
    }
}
